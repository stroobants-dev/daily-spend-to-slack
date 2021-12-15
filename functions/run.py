import boto3
import datetime
import os
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    ce_client = boto3.client('ce')
    account_id = boto3.client('sts').get_caller_identity().get('Account')
    today = datetime.date.today()
    yesterday = today - datetime.timedelta(days = 1) 

    response = ce_client.get_cost_and_usage(
        TimePeriod={
            'Start': str(yesterday),
            'End': str(today)
        },
        Granularity='DAILY',
        Metrics=['UnblendedCost']
    )

    # This could probably be improved a bit
    amount = response['ResultsByTime'][0]['Total']['UnblendedCost']['Amount']

    sns_client = boto3.client('sns')
    message = '''{{
        "version": "0",
        "id": "13cde686-328b-6117-af20-0e5566167482",
        "detail-type": "Yesterday usage: {amount}$",
        "source": "aws.ecr",
        "account": "{account_id}",
        "time": "{date}",
        "region": "{nickname}",
        "resources": [],
        "detail": {{}}
    }}'''.format(amount=amount,date=datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ"),nickname=os.environ['ACCOUNT_NICKNAME'], account=account_id)

    response = sns_client.publish(
        TopicArn=os.environ['SNS_TOPIC_ARN'],
        Message=message
    )
    return {
        "message": "Ok"
    }

if __name__ == "__main__":
    handler("test","test")