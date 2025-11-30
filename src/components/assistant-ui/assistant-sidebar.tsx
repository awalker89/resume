import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import type { FC, PropsWithChildren } from "react";

import { Thread } from "@/components/assistant-ui/thread";

type AssistantSidebarProps = PropsWithChildren<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultSidebarSize?: number; // percentage
  minSidebarSize?: number; // percentage
  maxSidebarSize?: number; // percentage
}>;

export const AssistantSidebar: FC<AssistantSidebarProps> = ({
  children,
  open = true,
  onOpenChange,
  defaultSidebarSize = 30,
  minSidebarSize = 22,
  maxSidebarSize = 45,
}) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      {/* Main content squeezes when sidebar is open */}
      <ResizablePanel
        // When sidebar is open, let content take remaining space
        // react-resizable-panels distributes based on sibling sizes
        className="aui-assistant-main"
      >
        {children}
      </ResizablePanel>
      {/* Handle visible only when sidebar is open */}
      {open && <ResizableHandle withHandle />}
      {/* Right sidebar with thread */}
      <ResizablePanel
        className="aui-assistant-sidebar border-l bg-background"
        collapsible
        defaultSize={defaultSidebarSize}
        minSize={minSidebarSize}
        maxSize={maxSidebarSize}
        // Collapse or expand via prop
        onCollapse={() => onOpenChange?.(false)}
        onExpand={() => onOpenChange?.(true)}
        // Use style to hide when closed to avoid stray borders
        style={{ display: open ? undefined : "none" }}
      >
        <Thread />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
