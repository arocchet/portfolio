"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";

export default function CustomizedTimeline() {
    const timelineItems = [
        {
          title: "Stage 3e",
          description: "Observation internship\nin a company\n1 week",
          color: "bg-teal-65",
        },
        {
          title: "High School Diploma",
          description: "Maths\nand NSI specialties\nWith honors",
          color: "bg-blue-50",
        },
        {
          title: "L1 Computer Science",
          description: "Computer Science Degree\nProgramming basics\nAlgorithms",
          color: "bg-purple-30",
        },
        {
          title: "Zone01",
          description: "Dev training\nProgramming\nFull-stack project",
          color: "bg-yellow-55",
        },
      ];
      

  return (
    <div className="p-2 rounded">
      <Timeline
        sx={{
          padding: 0,
          "& .MuiTimelineItem-root": {
            minHeight: "120px",
            "&:before": {
              display: "none",
            },
          },
        }}
      >
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} className="bg-transparent">
            <TimelineSeparator className="flex flex-col items-center gap-4">
              <div className="bg-default-500 w-[2px] flex-grow " />
              <div
                className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-white-5`}
              >
                <SchoolIcon className="w-5 h-5" />
              </div>
              <div className="bg-default-500 w-[2px] flex-grow " />
            </TimelineSeparator>
            <TimelineContent className="py-1 px-1">
              <div
                className={`text-base sm:text-lg font-bold mb-1 text-default-600`}
              >
                {item.title}
              </div>
              <div className="text-sm sm:text-base whitespace-pre-line leading-relaxed max-w-[200px] text-default-500">
                {item.description}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}