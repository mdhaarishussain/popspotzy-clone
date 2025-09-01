'use client'
import React from "react";
import { Box } from "@mui/material";

function GettingStarted() {

  return (
    <Box className="bg-slate-50 text-white min-h-screen w-screen overflow-x-hidden flex gap-20 flex-col justify-center items-center text-center py-5">
        <Box className=" w-2xl bg-slate-950 p-5 rounded shadow-md">
            <h1 className="text-2xl mb-4">Welcome to PopSpotzy!</h1>
            <p className="mb-4">Get started by exploring our features and setting up your profile.</p>
            <p className="mb-4">If you need help, check out our documentation or contact support.</p>
            <a href="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</a>
        </Box>
    </Box>
  );
}

export default GettingStarted;
