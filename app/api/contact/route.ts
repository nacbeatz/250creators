

export async function POST(request: Request) {
    // This API route is now deprecated. Email sending is handled via EmailJS on the frontend.
    return new Response(JSON.stringify({ success: false, error: "Email sending is now handled on the frontend via EmailJS." }), { status: 400 });
}
