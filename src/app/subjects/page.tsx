import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SubjectsTable from "@/components/subjects/table";

export default function SubjectsPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Page title here</h1>
          </CardTitle>
          <div className="w-full md:max-w-[200px]">
            <Button>+ Add new</Button>
          </div>
        </CardHeader>
        <CardContent>
          <SubjectsTable />
        </CardContent>
      </Card>
    </>
  );
}
