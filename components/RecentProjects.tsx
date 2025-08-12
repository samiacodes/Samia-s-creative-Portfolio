// components/RecentProjects.tsx
"use client";

import { ProjectCard } from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-between p-4 gap-6 mt-10">
        <ProjectCard
          title="UrbanVilla – Building Management System"
          subtitle="Full-Stack Building Management System with Role-Based Access & Real-Time Control"
          image="/images/P.png"
          link="https://urban-villlage-c50c6.web.app/"
          description={[
            "Developed a full-stack apartment building management system with Admin, Member, and User roles.",
            "Secure authentication using Firebase (Email/Password + Google), role-based protected routes, and JWT verification.",
            "Stripe integration for rent payments, with discounts and automated demotion after missed payments.",
            "Real-time admin dashboard, agreement management, announcements, and member tracking.",
          ]}
        />

        <ProjectCard
          title="Book Nest"
          subtitle="Where Every Click Opens a New Chapter"
          image="/images/P1.png"
          link="https://book-nest-202517.web.app/"
          description={[
            "Book Nest is a full-stack web application that allows users to browse, borrow, and return books online.",
            "It features secure authentication, role-based access control, and a streamlined borrowing system to prevent duplicate rentals.",
            "Admins can manage the book collection by adding, updating, and deleting entries.",
          ]}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
