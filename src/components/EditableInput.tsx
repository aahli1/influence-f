import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Icon for the edit button
import { Input } from "@/components/ui/input"; // Shadcn Input component
import { Button } from "@/components/ui/button"; // Shadcn Button component

const EditableInput: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('Enter Text');
  const [tempValue, setTempValue] = useState(inputValue);

  // Enable editing mode
  const handleEdit = () => {
    setTempValue(inputValue);
    setIsEditing(true);
  };

  // Save changes and exit editing mode
  const handleUpdate = () => {
    setInputValue(tempValue);
    setIsEditing(false);
  };

  // Cancel the edit and discard changes
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {!isEditing ? (
          <>
            <span className="text-lg">{inputValue}</span>
            <FaEdit 
              onClick={handleEdit} 
              className="text-blue-500 cursor-pointer" 
            />
          </>
        ) : (
          <Input 
            value={tempValue} 
            onChange={(e) => setTempValue(e.target.value)} 
            className="w-full"
          />
        )}
      </div>
      {/* Show Update and Cancel buttons when in editing mode */}
      {isEditing && (
        <div className="flex gap-2">
          <Button onClick={handleUpdate} variant="default">
            Update
          </Button>
          <Button onClick={handleCancel} variant="destructive">
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableInput;
