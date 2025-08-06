'use client'
import React from "react";
import { Box } from "@mui/material";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
// import Projects from "@/components/userdashcomp/projectspanel/addproject";
// import Projects from "./[username]/[project]/page";

function Dashboard() {
  // const { user } = useUser();

  return (
    <>
      <SignedIn>
        <Box className="bg-black text-white min-h-screen w-screen overflow-x-hidden flex gap-20 flex-col text-center py-5">
          {/* {user && <Projects userId={user.id} />} */}
        </Box>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default Dashboard;
