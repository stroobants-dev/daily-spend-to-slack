# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### DailySpendToSlack <a name="daily-spend-to-slack.DailySpendToSlack" id="dailyspendtoslackdailyspendtoslack"></a>

#### Initializers <a name="daily-spend-to-slack.DailySpendToSlack.Initializer" id="dailyspendtoslackdailyspendtoslackinitializer"></a>

```typescript
import { DailySpendToSlack } from 'daily-spend-to-slack'

new DailySpendToSlack(scope: Construct, id: string, props: DailySpendToSlackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#dailyspendtoslackdailyspendtoslackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#dailyspendtoslackdailyspendtoslackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#dailyspendtoslackdailyspendtoslackparameterprops)<span title="Required">*</span> | [`daily-spend-to-slack.DailySpendToSlackProps`](#daily-spend-to-slack.DailySpendToSlackProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlack.parameter.scope" id="dailyspendtoslackdailyspendtoslackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlack.parameter.id" id="dailyspendtoslackdailyspendtoslackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlack.parameter.props" id="dailyspendtoslackdailyspendtoslackparameterprops"></a>

- *Type:* [`daily-spend-to-slack.DailySpendToSlackProps`](#daily-spend-to-slack.DailySpendToSlackProps)

---





## Structs <a name="Structs" id="structs"></a>

### DailySpendToSlackProps <a name="daily-spend-to-slack.DailySpendToSlackProps" id="dailyspendtoslackdailyspendtoslackprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DailySpendToSlackProps } from 'daily-spend-to-slack'

const dailySpendToSlackProps: DailySpendToSlackProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountName`](#dailyspendtoslackdailyspendtoslackpropspropertyaccountname)<span title="Required">*</span> | `string` | *No description.* |
| [`schedule`](#dailyspendtoslackdailyspendtoslackpropspropertyschedule)<span title="Required">*</span> | [`aws-cdk-lib.aws_events.Schedule`](#aws-cdk-lib.aws_events.Schedule) | *No description.* |
| [`slackChannelId`](#dailyspendtoslackdailyspendtoslackpropspropertyslackchannelid)<span title="Required">*</span> | `string` | *No description.* |
| [`slackChannelName`](#dailyspendtoslackdailyspendtoslackpropspropertyslackchannelname)<span title="Required">*</span> | `string` | *No description.* |
| [`slackWorkspaceId`](#dailyspendtoslackdailyspendtoslackpropspropertyslackworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accountName`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlackProps.property.accountName" id="dailyspendtoslackdailyspendtoslackpropspropertyaccountname"></a>

```typescript
public readonly accountName: string;
```

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlackProps.property.schedule" id="dailyspendtoslackdailyspendtoslackpropspropertyschedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* [`aws-cdk-lib.aws_events.Schedule`](#aws-cdk-lib.aws_events.Schedule)

---

##### `slackChannelId`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlackProps.property.slackChannelId" id="dailyspendtoslackdailyspendtoslackpropspropertyslackchannelid"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* `string`

---

##### `slackChannelName`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlackProps.property.slackChannelName" id="dailyspendtoslackdailyspendtoslackpropspropertyslackchannelname"></a>

```typescript
public readonly slackChannelName: string;
```

- *Type:* `string`

---

##### `slackWorkspaceId`<sup>Required</sup> <a name="daily-spend-to-slack.DailySpendToSlackProps.property.slackWorkspaceId" id="dailyspendtoslackdailyspendtoslackpropspropertyslackworkspaceid"></a>

```typescript
public readonly slackWorkspaceId: string;
```

- *Type:* `string`

---



