"use client";

import { useEffect } from "react";

type LocaleDocumentProps = {
  locale: string;
  dir: "rtl" | "ltr";
};

export function LocaleDocument({ locale, dir }: LocaleDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.dataset.locale = locale;
  }, [dir, locale]);

  return null;
}
