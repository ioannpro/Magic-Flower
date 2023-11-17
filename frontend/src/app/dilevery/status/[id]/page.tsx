import Status from "@/components/screens/dilevery/status";


export default function StatusPage({ params }: { params: { id: any } }) {
    return (
            <Status id = {params.id}/>
        )
}