import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import {LinkIcon, LogOut } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import logo from '../assets/logo.png'

const Header: React.FC = () => {

    const user = true;
    const navigate = useNavigate()

  return (
    <nav className='flex justify-between items-center py-4'>
        <Link to="/">
            <img className='rounded-full h-20 mr-1' src={logo} alt="" />
        </Link>

        <div className='justify-center flex '>
            {!user ?
                <Button onClick={() => navigate("/auth")}> Login</Button>    
                :(
                  <DropdownMenu>
                  <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden '>
                  <Avatar >
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>NJ</AvatarFallback>
                  </Avatar>

                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Naina Johri</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='flex items-center outline-none cursor-pointer '> <LinkIcon className='mr-2 h-4 w-4'/> My Links</DropdownMenuItem>
                    <DropdownMenuItem className='flex items-center outline-none cursor-pointer'> <LogOut  className='mr-2 h-4 w-4 text-red-500'/>
                    <span>LogOut</span> </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                )
        }
            
        </div>



    </nav>
  )
}

export default Header