"use client";

import { addNewUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

function AddNewUser() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result = await addNewUserAction(addNewUserFormData);
    console.log(result);
  }

  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false);
          setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControls.map((item) => (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={item.name} className="text-right">
                  {item.label}
                </Label>
                <Input
                  id={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  className="col-span-3"
                  value={addNewUserFormData[item.name]}
                  onChange={(event) => {
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [item.name]: event.target.value,
                    });
                  }}
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className=" disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
