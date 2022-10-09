import {fireEvent} from "@testing-library/vue"
import Counter from "./Counter.vue";
import {expect, describe, it} from "vitest";
import {vuetifyRender} from "../../setupFiles";


describe("Counter", () => {
  const counterButtonId = "counterButton";

  it("Should have the counter defined in the ambiente", () => {
    const counter = vuetifyRender(Counter);

    const counterButton = counter.getByTestId(counterButtonId)

    expect(counterButton).toBeDefined()
  })

  it("Should increment the counter", async () => {
    const counter = vuetifyRender(Counter);

    const counterButton = counter.getByTestId(counterButtonId);

    expect(counterButton.textContent).toContain("0")

    await fireEvent.click(counterButton);

    expect(counterButton.textContent).toContain("1")
  })
})
