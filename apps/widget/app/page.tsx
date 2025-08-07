
"use client"
import { Button } from "@workspace/ui/components/button"
import { useQuery } from "convex/react"
import {api} from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex justify-center min-h-svh min-w-[300px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">apps/widget</h1>
        <h6 className="font-bold uppercase">all users</h6>
        <p>          
          {users && users.map(user=>user.name)}
        </p> 
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}
