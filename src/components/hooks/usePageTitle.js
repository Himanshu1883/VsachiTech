import { useEffect } from "react";

const BASE_TITLE = "Vsachi Tech";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} - ${BASE_TITLE}`
      : BASE_TITLE;
  }, [title]);
}
