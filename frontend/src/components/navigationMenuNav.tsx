import {forwardRef } from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export const NavigationMenuNav = ()=> {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>How It Works</NavigationMenuTrigger>
          <NavigationMenuContent>
          {/* <ul className="grid gap-3 p-2 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]"> */}
          <ul className="grid gap-3 p-2  w-[50vw] md:w-[30vw] lg:w-[200px]  grid-cols-1">
            <ListItem href="/investors/" title="For Investors" />
            <ListItem href="/assets-owners/" title="For Asset Owners" />
          </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
}

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(({ title, href }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
