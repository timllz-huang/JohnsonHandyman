"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Family</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Two generations</h1>
        <p className="text-medium">
          A father and son team building and repairing homes across Western
          Sydney with old-fashioned care.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Meet us">Meet us</Button>
          <Button title="Our work" variant="secondary">
            Our work
          </Button>
        </div>
      </div>
    </section>
  );
}
