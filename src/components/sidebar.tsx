import { cn } from "@/lib/utils"
import { Playlist } from "@/playlists"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import React from "react"
import { Button } from "./ui/button"
import { AreaChart, Book, ListChecks, Music, PlayCircle, Radio, User, WindIcon } from "lucide-react"


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <PlayCircle size={20} className="mr-2 h-4 w-4"/>
              Listen Now
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <WindIcon size={20} className="mr-2 h-4 w-4"/>
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Radio size={20} className="mr-2 h-4 w-4"/>
              Radio
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <ListChecks size={20} className="mr-2 h-4 w-4"/>
              Playlists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Music size={20} className="mr-2 h-4 w-4"/>
              Songs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User size={20} className="mr-2 h-4 w-4"/>
              Made for You
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AreaChart size={20} className="mr-2 h-4 w-4"/>
              Artists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Book size={20} className="mr-2 h-4 w-4"/>
              Albums
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
