import { app, InvocationContext, Timer } from "@azure/functions";

export async function TimerExample(
  myTimer: Timer,
  context: InvocationContext
): Promise<void> {
  context.log("Timer function processed request.");
}

app.timer("TimerExample", {
  schedule: "0 */5 * * * *",
  handler: TimerExample,
});
