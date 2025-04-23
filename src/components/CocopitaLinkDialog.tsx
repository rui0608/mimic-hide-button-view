
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type CocopitaLinkDialogProps = {
  open: boolean;
  onYes: () => void;
  onNo: () => void;
};

const CocopitaLinkDialog: React.FC<CocopitaLinkDialogProps> = ({ open, onYes, onNo }) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            すでにワンリーナビにアカウントがあります。<br />
            COCOPiTAと連動させますか？
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="justify-center gap-4 mt-4">
          <Button 
            className="w-32 rounded-full bg-blue-500 hover:bg-blue-600 text-white" 
            onClick={onYes}
          >
            はい
          </Button>
          <Button variant="outline" className="w-32 rounded-full" onClick={onNo}>
            いいえ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CocopitaLinkDialog;
