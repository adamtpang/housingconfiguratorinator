"use client";

import { ConfiguratorLayout } from "@/components/ConfiguratorLayout";
import { ConfigurationPanel } from "@/components/ConfigurationPanel";
import { PreviewPanel } from "@/components/PreviewPanel";
import { TierSelection } from "@/components/steps/TierSelection";
import { LoadoutSelection } from "@/components/steps/LoadoutSelection";
import { SummaryFooter } from "@/components/SummaryFooter";
import { ConfiguratorProvider } from "@/lib/store";

export default function Home() {
  console.log("Rendering Home Page");
  return (
    <ConfiguratorProvider>
      <ConfiguratorLayout>
        <ConfigurationPanel>
          <TierSelection />
          <div className="my-8 h-px w-full bg-border/50" />
          <LoadoutSelection />
          <SummaryFooter />
        </ConfigurationPanel>
        <PreviewPanel />
      </ConfiguratorLayout>
    </ConfiguratorProvider>
  );
}
