import { DrawerCard, DrawerEmpty, DrawerInfo } from "../../entities";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/lib/store";
import { openDrawer } from "../../feature/slices/drawer-slice/drawer-slice";
import Button from "../../shared/ui/button";

export default function Drawer() {
  const { isOpen, itemCount, items } = useSelector(
    (state: RootState) => state.drawer
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpen ? "" : "translate-x-[100vh]"
      } duration-500 z-[100] h-screen max-h-[1040px] w-screen md:w-[540px] fixed top-[2px] right-0 lg:right-5 bg-[#5C5C5C] rounded-[20px] p-10 flex flex-col`}
    >
      <div
        className={`w-full flex ${
          itemCount !== 0 ? "justify-between" : "justify-end"
        } items-center font-medium text-[24px] mb-6`}
      >
        {itemCount !== 0 && (
          <p>
            Ваши покупки <span>({itemCount})</span>
          </p>
        )}
        <Button
          onClick={() => dispatch(openDrawer())}
          className="w-8 h-8 relative 
          transition-colors  group"
        >
          <span className="group-hover:bg-primary duration-200 block absolute top-1/2 left-1/2 w-1 h-8 bg-white rounded-sm rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
          <span className="group-hover:bg-primary duration-200 block absolute top-1/2 left-1/2 w-1 h-8 bg-white rounded-sm -rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
        </Button>
      </div>
      {itemCount !== 0 && (
        <div className="h-full flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto max-h-full">
            {items.map((item) => {
              return <DrawerCard key={item.id} {...item} />;
            })}
          </div>

          <DrawerInfo />
        </div>
      )}

      {itemCount === 0 && <DrawerEmpty />}
    </div>
  );
}
