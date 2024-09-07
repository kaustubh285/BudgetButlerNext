import CreditCardBox from "@/components/CreditCardBoxcomponents";
import DesktopWrapper from "@/components/DesktopWrappercomponents";
import SectionNavigation from "@/components/SectionNavigationcomponents";
import { redirect } from "next/navigation";

export default function Home({
  params,
  searchParams,
}: {
  params?: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const navOptions: string[] = ["groups", "goals", "stats"];

  if (!searchParams || !navOptions.includes(searchParams?.tab || "")) {
    redirect("/?tab=groups");
  }

  const tab: string | string[] | undefined = searchParams?.tab;
  return (
    <DesktopWrapper>
      <SectionNavigation
        selectedSection={tab || "groups"}
        navOptions={navOptions}
      />
      <div className=' flex items-center justify-center h-full'>
        <div className=' w-2/5 min-w-96 flex justify-center bg-blue-300 h-full'>
          <CreditCardBox />
        </div>
        <div className=' flex-1'>right side</div>
      </div>
    </DesktopWrapper>
  );
}
