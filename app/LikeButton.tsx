"use client";
/*
The client refers to the browser on a user’s device that sends a request to a server 
for your application code. It then turns the response it receives from the server 
into an interface the user can interact with.

The server refers to the computer in a data center that stores your application code,
receives requests from a client, does some computation, and sends back an appropriate response.

Each environment has its own set of capabilities and constraints. For example, 
by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, 
which can improve your application's performance. But, as you learned earlier, to make your UI interactive, 
you need to update the DOM on the client.
*/

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    console.log("likes count incremented");
  }
  return <button onClick={handleClick}>Like({likes})</button>;
}
