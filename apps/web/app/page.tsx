"use client"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react"
import {api} from "@workspace/backend/_generated/api"
import { Input } from "@workspace/ui/components/input";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex justify-center min-h-svh min-w-[300px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">apps/web</h1>
        <h6 className="font-bold uppercase">all users</h6>
        <p className="flex flex-col">          
          {users && users.map(user=><span>{user.name}</span>)}
        </p> 
        <Input />
        <Button onClick={()=>addUser()} size="sm">Add user</Button>

      </div>
    </div>
  )
}
