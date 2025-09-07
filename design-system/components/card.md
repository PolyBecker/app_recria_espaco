📌 Card

Description: Container used to highlight grouped content (e.g., professional profile, search result).

Props:

elevation: "sm" | "md" | "lg"

clickable: boolean

Guidelines

Use for search results and featured information.

Avoid for long blocks of text.

Code

import { Card, CardContent } from "@mui/material";

<Card>
  <CardContent>
    <h3>Architect John</h3>
    <p>Specialist in modern spaces</p>
  </CardContent>
</Card>
