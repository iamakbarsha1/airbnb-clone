import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {MenuIcon,UserCircleIcon} from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';

function Dropdown() {
   
   const router = useRouter();

   const signup = () => {
      router.push({
         pathname: "/signup",
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
         <DropdownMenu.Trigger className="outline-none ">
         <div className="group flex items-center space-x-2 border-2 rounded-full p-2 focus:shadow-lg hover:shadow-lg">
                  <MenuIcon className="h-6 text-sm rounded-full cursor-pointer text-gray-500 group-hover:text-gray-900" />
                  <UserCircleIcon className="h-6 text-sm rounded-full cursor-pointer text-gray-500 group-hover:text-gray-900" />
               </div>
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

export default Dropdown
