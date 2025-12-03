"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="mx-2"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" /> 
      ) : (
        <Moon className="h-5 w-5" /> 
      )}
    </Button>
  );
}
