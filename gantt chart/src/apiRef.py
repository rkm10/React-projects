def projects():
my_dict = {}
    # land_acq_data = frappe.db.sql(f"SELECT project_name,property_image,expected_start_date,expected_end_date,lot_area,lot_price,  FROM `tabProject`;", as_dict = True)
land_acq_data = frappe.get_list('Project', fields = ['*'])
for index, row in enumerate(land_acq_data, start = 1):
    my_dict[f'record{index}'] = row

return my_dict

child_data = projects()
frappe.response['message'] = child_data