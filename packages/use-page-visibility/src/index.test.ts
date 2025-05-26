import { renderHook, act } from "@testing-library/react-hooks";
import { usePageVisibility } from "./index";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("usePageVisibility", () => {
  const getVisibilityState = (state: "visible" | "hidden") => {
    Object.defineProperty(document, "visibilityState", {
      value: state,
      writable: true,
    });
  };

  const fireVisibilityChange = () => {
    document.dispatchEvent(new Event("visibilitychange"));
  };

  beforeEach(() => {
    // Reset visibilityState before each test
    getVisibilityState("visible");
  });

  it("should return true initially if document is visible", () => {
    getVisibilityState("visible");
    const { result } = renderHook(() => usePageVisibility());
    expect(result.current).toBe(true);
  });

  it("should return false initially if document is hidden", () => {
    getVisibilityState("hidden");
    const { result } = renderHook(() => usePageVisibility());
    expect(result.current).toBe(false);
  });

  it("should update to false when visibility changes to hidden", () => {
    const { result } = renderHook(() => usePageVisibility());
    expect(result.current).toBe(true);

    act(() => {
      getVisibilityState("hidden");
      fireVisibilityChange();
    });
    expect(result.current).toBe(false);
  });

  it("should update to true when visibility changes to visible", () => {
    getVisibilityState("hidden");
    const { result } = renderHook(() => usePageVisibility());
    expect(result.current).toBe(false);

    act(() => {
      getVisibilityState("visible");
      fireVisibilityChange();
    });
    expect(result.current).toBe(true);
  });

  it("should clean up event listener on unmount", () => {
    const removeSpy = vi.spyOn(document, "removeEventListener");
    const { unmount } = renderHook(() => usePageVisibility());

    unmount();

    expect(removeSpy).toHaveBeenCalledWith(
      "visibilitychange",
      expect.any(Function)
    );
  });
});
