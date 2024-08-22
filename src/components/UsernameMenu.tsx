import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";


const UsernameMenu = () => {

 const { user, logout } = useAuth0();

 return(
    <>
      <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold">
        <h2 className="font-bold px-2">Hello</h2>
        <div className="flex bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
        <CircleUserRound className="bg-red-200 rounded-xl text-black" />
        {user?.email}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuItem>
          <Link to="/manage-restaurant" className="font-bold hover:text-yellow-500">
            Restro Admin
          </Link>
        </DropdownMenuItem>
      <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-yellow-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-red-500 hover:bg-red-700"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
 )
}

export default UsernameMenu;