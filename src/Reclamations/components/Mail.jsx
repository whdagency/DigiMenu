import React from "react";
import { MailList } from "./Clams_list";

function Mail({mails}) {
  return (
    <div>
      <MailList items={mails} />
    </div>
  );
}
export default Mail;
