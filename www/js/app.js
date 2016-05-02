/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */

$(document).ready(function() {
  AddApprovalElements(4);
});



function AddApprovalElements(count)
{
    for (var approvalID = 1; approvalID < (count + 1); approvalID++)
        AppendApprovalElements(approvalID);
}
function AppendApprovalElements(approvalID)
{
    $("#Approvals").append(GetApprovalListItem(approvalID));
    $("#ApprovalDetailPanels").append(GetApprovalDetailPanel(approvalID));
}
function GetApprovalListItem(approvalID)
{
    var elementID = "approvalItem" + approvalID;
    var title = "Approval " + approvalID;
    var approvalListItem = '<li><a href="#' + elementID + '">' + title + '</a></li>';
    
    return approvalListItem;
}
function GetApprovalDetailPanel(approvalID)
{
    var elementID = 'approvalItem' + approvalID;
    var title = 'ApprovalDetail ' + approvalID;
    var approvalDetailPanel = '<div class="panel" data-title="' + title + '" id="' + elementID + '">';
    approvalDetailPanel += '<br>Super cool approval details go here.</div>';
    approvalDetailPanel += '</div>';
    
    return approvalDetailPanel;
}
