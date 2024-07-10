import { Modal, ModalContent } from "@/components/Modals/Modal";
import VentureType from "@/types/strapi/ventureType";

export default function ProjectModal({
  dialogOpen,
  setDialogOpen,
  project,
}: {
  dialogOpen: boolean;
  setDialogOpen: () => void;
  project: VentureType;
}) {
  return (
    <Modal open={dialogOpen} onOpenChange={setDialogOpen}>
      <ModalContent className="text-black">
        <div className="p-3">{project.attributes.title}</div>
        <div className="px-10">{project.attributes.content}</div>
      </ModalContent>
    </Modal>
  );
}
