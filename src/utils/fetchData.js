const getBaseUrl = (req) => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    } else {
      return req?.headers?.host ? `https://${req.headers.host}` : "http://localhost:3000";
    }
  };
  
  export const fetchInfo = async (req) => {
    const baseUrl = getBaseUrl(req);
    const apiUrl = `${baseUrl}/api/getInfo`;
    const res = await fetch(apiUrl);
    const libInfo = await res.json();
  
    return libInfo;
  };
  
  export const fetchProjects = async (req) => {
    const baseUrl = getBaseUrl(req);
    const apiUrl = `${baseUrl}/api/getProjects`;
    const res = await fetch(apiUrl);
    const projects = await res.json();
  
    return projects;
  };
  
  export const fetchSocials = async (req) => {
    const baseUrl = getBaseUrl(req);
    const apiUrl = `${baseUrl}/api/getSocials`;
    const res = await fetch(apiUrl);
    const socials = await res.json();
  
    return socials;
  };
  