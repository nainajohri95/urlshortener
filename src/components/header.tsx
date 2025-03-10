import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {



    const user = true;
    const navigate = useNavigate()

  return (
    <nav className='flex justify-between item-center py-4'>
        <Link to="/">
            <img src="" alt="" />
        </Link>

        <div className='justify-center dispaly-flex'>
            {!user ?
                <button onClick={() => navigate("/auth")}> Login</button>    
                :(
                  <DropdownMenu>
                  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                )
        }
            
        </div>



    </nav>
  )
}

export default Header