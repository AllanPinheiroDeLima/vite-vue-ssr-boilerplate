import {fireEvent, render} from "@testing-library/vue"
import Counter from "./Counter.vue";
import {expect, describe, it} from "vitest";

describe("Counter", () => {
  const counterButtonId = "counterButton";

  it("Should have the counter defined in the ambiente", () => {
    const counter = render(Counter);

    const counterButton = counter.getByTestId(counterButtonId)

    expect(counterButton).toBeDefined()
  })

  it("Should increment the counter", async () => {
    const counter = render(Counter);

    const counterButton = counter.getByTestId(counterButtonId);

    expect(counterButton.textContent).toContain("0")

    await fireEvent.click(counterButton);

    expect(counterButton.textContent).toContain("1")
  })
})
