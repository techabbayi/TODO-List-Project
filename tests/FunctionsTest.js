describe("ToDo List Functions", function() {
  it("should add a new activity to the list and clear the input", function() {
    input.value = 'New Activity';
    click();
    expect(listOfActivities.length).toBe(1);
    expect(listOfActivities[0]).toBe('New Activity');
    expect(input.value).toBe('');
  });
  it("should delete an activity from the list", function() {
    listOfActivities = ['Activity 1', 'Activity 2'];
    deleteItem(0);
    expect(listOfActivities.length).toBe(1);
    expect(listOfActivities[0]).toBe('Activity 2');
  });

  it("should edit an activity in the list", function() {
    listOfActivities = ['Activity 1', 'Activity 2'];
    spyOn(window, 'prompt').and.returnValue('Edited Activity');
    editItem(0);
    expect(listOfActivities[0]).toBe('Edited Activity');
  });
});