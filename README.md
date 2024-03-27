## MongoDB Collections

1. **Users Collection**: Stores user information such as system admin, orphanage manager, social worker, and other orphanage staff, including their roles.

2. **Roles Collection**: Allows the system admin to easily modify and remove roles without modifying the application code. Useful when there are a growing number of roles or when role-based permissions need frequent updates.

3. **Child Profile Collection**: Stores information about the children available for adoption.

4. **Parent Profile Collection**: Stores information about potential adoptive parents.

5. **Case Collection**: Stores information about the cases.

   - The orphanage manager can view ongoing cases by querying the Cases collection and retrieve relevant information, including case details and the assigned social worker's name.
   - When the orphanage manager assigns a social worker for a case, a new document is inserted into the Cases collection. The document contains case details along with the assigned social worker's identifier (assignedWorkerId) from the users collection.

6. **Inquiry Collection**: Stores the inquiries created by the orphanage manager.

7. **Response Collection**: Stores the responses provided by the system admin.

   - The system admin can view inquiries by querying the Inquiries collection and retrieve relevant information.
   - The system admin can choose an inquiry and use the response inquiry form to create a response. The response document is then inserted into the Responses collection, referencing the corresponding inquiry using the Inquiry ID.

   Storing inquiries and responses in separate collections allows for easy tracking and management of communication between the orphanage manager and the system admin. The collections can be queried to view specific inquiries, retrieve associated responses, and perform further analysis or reporting as needed.

8. **Approval Requests Collection**: Stores requests for editing and deleting records made by the orphanage manager.

   Each document represents an approval request and can have fields such as:
   - Request ID (unique identifier)
   - Request Type (e.g., "Edit Child", "Delete Parent", "Edit Staff", etc.)
   - Object ID (reference to the relevant document in the respective collection)
   - Request Details (e.g., reason for edit/delete)
   - Approval Status (e.g., "Pending", "Approved", "Rejected")
   - Approval Comments (optional field for system admin to provide comments)

9. **Chat Messages Collection**: Stores chat messages exchanged between staff members.

   Each document represents a chat message and can have fields such as:
   - Message ID (unique identifier)
   - Sender ID (reference to the user sending the message)
   - Receiver ID (reference to the user receiving the message)
   - Message Content (the actual text or content of the message)
   - Timestamp (the date and time when the message was sent)

10. **Deletion Request Collection**: Stores deletion requests made by an orphanage manager.

   Each document represents a deletion request and should include the following fields:
   - Request ID (unique identifier for the deletion request)
   - Child ID (reference to the child profile being deleted)
   - Commit Message (the message provided by the orphanage manager explaining the reason for deletion)
   - Orphanage Manager Name
   - Request Status (e.g., pending, approved, rejected)

   When an orphanage manager wants to delete a child, they can submit a deletion request by creating a new document in the Deletion Request collection. The system admin can then review the request, update the status field to indicate approval or rejection, and take appropriate actions based on the decision.

