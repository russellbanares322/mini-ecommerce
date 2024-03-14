import { useToast } from "@chakra-ui/react";
import React from "react";

const useToastNotification = () => {
  const toast = useToast();

  const showToastNotification = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 4000,
      isClosable: true,
      position: "top-center",
    });
  };
  return { showToastNotification };
};

export default useToastNotification;
