import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx"
import { AiOutlineMenuFold } from "react-icons/ai";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./themebutton";

function Navbar() {
    return (
        <nav className="w-full shadow-md sticky top-0 z-50 bg-background/50 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Avatar Section */}
                    <div className="flex-shrink-0">
                        <div className="avatar">
                            <a href="/"><Avatar>
                                <AvatarImage src="/Anime.jpeg" alt="Logo" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar></a>
                        </div>
                    </div>
                    {/*Mobile menu button*/}
                    <div className="Mobile-menu-button md:hidden">
                        <Sheet>
                            <SheetTrigger className="flex items-center">
                                <AiOutlineMenuFold className="w-7 h-9" />
                            </SheetTrigger>
                            <SheetContent className="flex flex-col md:hidden items-center">
                                <SheetHeader className="flex flex-col items-center">
                                    <SheetTitle>
                                        <a href="/"><Avatar>
                                            <AvatarImage src="/Anime.jpeg" alt="Logo" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar></a>
                                    </SheetTitle>
                                    <SheetDescription>
                                        Full Stack Developer
                                    </SheetDescription>
                                </SheetHeader>
                                <a href="/" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Home</a>
                                <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">About</a>
                                <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Services</a>
                                <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Contact</a>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:flex">
                        <a href="/" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Home</a>
                        <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">About</a>
                        <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Services</a>
                        <a href="#" className="text-foreground hover:text-gray-700 px-3 py-2 rounded-md text-sm font-bold transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg">Contact</a>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar