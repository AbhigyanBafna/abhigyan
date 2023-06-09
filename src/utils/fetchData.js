export const fetchInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getInfo`);

    if (!res.ok) {
      throw new Error("Failed to fetch info");
    }

    const libInfo = await res.json();
    return libInfo;
  } catch (error) {
    console.error("Error fetching info:", error);

    return null;
  }
};

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const projects = await res.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);

    return null;
  }
};

export const fetchSocials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    if (!res.ok) {
      throw new Error("Failed to fetch socials");
    }

    const socials = await res.json();
    return socials;
  } catch (error) {
    console.error("Error fetching socials:", error);

    return null;
  }
};
