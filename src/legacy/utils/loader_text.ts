import type { ResultLoader } from "../legacy/shared/types";

const loader_text = async (path: string): Promise<ResultLoader<string>> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return {
        success: false,
        result: `Failed to load JSON file: ${path}`,
      };
    }
    const data = await response.text();
    if (data.trim().startsWith("<!doctype html"))
      return { success: false, result: `Failed to load HTML file: ${path}` };
    return {
      success: true,
      result: data,
    };
  } catch (_: unknown) {
    return {
      success: false,
      result: `Failed to load JSON file: ${path}`,
    };
  }
};

export default loader_text;
