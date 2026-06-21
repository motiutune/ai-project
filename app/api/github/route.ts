import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        user(login: "motiutune") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`,
    }),
    next: { revalidate: 3600 },
  })

  const data = await res.json()
  console.log("GitHub response:", JSON.stringify(data, null, 2))
  const calendar = data.data.user.contributionsCollection.contributionCalendar

  return NextResponse.json(calendar)
}