export type JobType = {
    employer_name: string;
    employer_logo: string;
    employer_website: string;
    employer_company_type: string;
    job_publisher: string;
    job_id: string;
    job_employment_type: 'FULLTIME' | 'PARTTIME' | 'CONTRACT' | 'INTERN' | 'TEMPORARY'; // Adjust as necessary
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits?: string | null; // Assuming job_benefits might be a string or null
    job_google_link: string;
    job_offer_expiration_datetime_utc: string;
    job_offer_expiration_timestamp: number;
    job_required_experience?: string | null; // Assuming job_required_experience might be a string or null
    job_required_skills?: string | null; // Assuming job_required_skills might be a string or null
    job_required_education?: string | null; // Assuming job_required_education might be a string or null
    job_experience_in_place_of_education: boolean;
    job_min_salary?: number | null; // Optional and can be null
    job_max_salary?: number | null; // Optional and can be null
    job_salary_currency?: string | null; // Optional and can be null
    job_salary_period?: string | null; // Optional and can be null
    job_highlights?: string | null; // Assuming job_highlights might be a string or null
    job_job_title?: string | null; // Optional and can be null
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
    job_occupational_categories?: string | null; // Optional and can be null
    job_naics_code: string;
    job_naics_name: string;
};
