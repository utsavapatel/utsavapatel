
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItemProps {
  degree: string;
  institution: string;
  years: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, years }) => (
  <Card className="mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-background">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-semibold text-neutral-text">{degree}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-neutral-muted">{institution}</p>
      <p className="text-xs text-neutral-muted">{years}</p>
    </CardContent>
  </Card>
);

export default EducationItem;
