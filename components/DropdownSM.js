import { DotsVerticalIcon } from "@heroicons/react/solid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/dist/client/router";

function DropdownSM() {

   const router = useRouter();
   const signup = () => {
      router.push({
         pathname: "/signup"
      });
   };
   const login = () => {
      router.push({
         pathname: "/login",
      });
   };

   return (
      <div>
         <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex">
               <DotsVerticalIcon className="h-6 items-center text-sm rounded-full cursor-pointer outline-none text-gray-500 hover:text-gray-900"/>
            </DropdownMenu.Trigger>

         <DropdownMenu.Content loop className="absolute top-1 -left-1 w-52 bg-white pl-1 pr-1 py-2 rounded-lg">
            <DropdownMenu.Item className="item" onClick={signup}>Sign up</DropdownMenu.Item>
            <DropdownMenu.Item className="item" onClick={login}>Log in</DropdownMenu.Item>
            <DropdownMenu.Separator className="border border-b-1 my-2" />
            <DropdownMenu.Item className="item">Host your home</DropdownMenu.Item>
            <DropdownMenu.Item className="item">Host an experience</DropdownMenu.Item>
            <DropdownMenu.Item className="item">Help</DropdownMenu.Item>
         </DropdownMenu.Content>

         </DropdownMenu.Root>
      </div>
   )
}

export default DropdownSM
