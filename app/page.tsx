import CreditCardBox from "@/components/CreditCardBoxcomponents";
import DesktopWrapper from "@/components/DesktopWrappercomponents";

export default function Home() {
  return (
    <DesktopWrapper>
      <div>Lets build this!!!!</div>
      <div className=' flex items-center justify-center h-full'>
        <div className=' w-2/5 min-w-96 flex justify-center bg-blue-300 h-full'>
          <CreditCardBox />
        </div>
        <div className=' flex-1'>right side</div>
      </div>
    </DesktopWrapper>
  );
}
