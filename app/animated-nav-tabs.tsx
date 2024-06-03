// Read more about this component in https://www.nico.fyi/blog/animated-nav-link-tabs-like-vercel

"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AnimatedNavTabs = ({
  tabs,
  springy,
}: {
  tabs: Array<{ label: React.ReactNode; path: string; active: boolean }>;
  springy?: boolean;
}) => {
  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabIndicatorRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hoverBgRef = useRef<HTMLDivElement | null>(null);
  const activeTab = tabs.find((tab) => tab.active);

  // this effect is used to animate the tab indicator when the active tab changes
  useEffect(() => {
    // Find the active tab based on the current pathname. Compare the pathname with the data-path attribute of the tab's anchor element.
    const activeTabRef = tabRefs.current.find(
      (ref) => ref?.dataset.path === activeTab?.path
    );
    if (activeTabRef && tabIndicatorRef.current) {
      // Set the width of the tab indicator to the width of the active tab.
      tabIndicatorRef.current.style.width = `${activeTabRef.offsetWidth}px`;
      // Set the left position of the tab indicator to the left position of the active tab.
      tabIndicatorRef.current.style.left = `${activeTabRef.offsetLeft}px`;
    }
  }, [activeTab]);

  // this effect is used to show and hide the hover background when the mouse enters and leaves the tabs
  useEffect(() => {
    const tabsElements = tabRefs.current;
    const tabContainer = tabContainerRef.current;

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Type assertion here
      if (hoverBgRef.current) {
        hoverBgRef.current.style.width = `${target.offsetWidth}px`;
        hoverBgRef.current.style.left = `${target.offsetLeft}px`;
        hoverBgRef.current.style.opacity = "1";
      }
    };

    tabsElements.forEach((tab) => {
      tab?.addEventListener("mouseenter", handleMouseEnter);
    });

    const handleMouseLeave = () => {
      if (hoverBgRef.current) {
        hoverBgRef.current.style.opacity = "0";
      }
    };

    tabContainer?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tabsElements.forEach((tab) => {
        tab?.removeEventListener("mouseenter", handleMouseEnter);
      });
      tabContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={tabContainerRef}
          className="inline-flex h-12 w-full items-center justify-start rounded-none border-b bg-transparent px-2 text-muted-foreground"
          role="tablist"
          tabIndex={0}
        >
          {tabs.map((tab, idx) => (
            <div
              role="tab"
              aria-selected={tab.active ? true : false}
              tabIndex={0}
              key={tab.path}
              ref={(ref) => {
                tabRefs.current[idx] = ref;
                return undefined;
              }}
              data-path={tab.path}
              data-state={tab.active ? "active" : "inactive"}
              className={
                "relative z-10 inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none bg-transparent px-4 py-1 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-none"
              }
            >
              {tab.label}
            </div>
          ))}
          {/* the hover background */}
          <div
            ref={hoverBgRef}
            className={cn(
              "absolute bottom-0 z-0 h-full py-2 transition-all motion-reduce:transition-none",
              springy
                ? "duration-500 ease-spring-4"
                : "duration-150 ease-linear"
            )}
            style={{ opacity: 0 }}
          >
            <div className="h-full w-full rounded-sm bg-muted bg-opacity-10 " />
          </div>
          <div
            ref={tabIndicatorRef}
            // this div animates the width and its left position usong the transition-all class
            className={cn(
              "absolute bottom-0 z-10 transition-all motion-reduce:transition-none",
              springy
                ? "duration-500 ease-spring-4"
                : "duration-150 ease-linear"
            )}
          >
            <div className="h-1 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  const pathname = usePathname();
  const tabs = [
    { label: <Link href="/">Home</Link>, path: "/", active: pathname === "/" },
    {
      label: <Link href="/add-user">Add User</Link>,
      path: "/add-user",
      active: pathname === "/add-user",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-4">
      <AnimatedNavTabs tabs={tabs} />
    </div>
  );
};

export default Tabs;
