import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Modal({
  dialogOpen,
  setDialogOpen,
  title,
  content,
}: {
  dialogOpen: boolean;
  setDialogOpen: () => void;
  title: string;
  content: string;
}) {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {content}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
