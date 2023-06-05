const regionList = document.querySelector('#filterList');

export const toggleCollapseList = () => {
  const toggleStatus = regionList.getAttribute('data-toggle');

  if(toggleStatus === 'collapsed') {
    regionList.style.display = 'block';
    regionList.setAttribute('data-toggle', 'expanded');
  } else {
    regionList.style.display = 'none';
    regionList.setAttribute('data-toggle', 'collapsed');
  }
};

export const collapseList = () => {
  const toggleStatus = regionList.getAttribute('data-toggle');

  if(toggleStatus === 'collapsed') {
    return false;
  }

  regionList.style.display = 'none';
  regionList.setAttribute('data-toggle', 'collapsed');
};